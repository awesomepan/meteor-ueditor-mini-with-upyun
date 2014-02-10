if Meteor.isServer
  fs = Npm.require("fs")
  path = Npm.require("path")
  uuid = Npm.require('node-uuid')

  md5 = (string) ->
    crypto = Npm.require("crypto")
    md5sum = crypto.createHash("md5")
    md5sum.update string, "utf8"
    md5sum.digest "hex"

  Router.map ->
    @route 'uploadUpyunImage',
      path: '/upload/upyun/image'
      where: 'server'
      action: ->
        file = RequestData.file("upfile")
        fileContent = fs.readFileSync(file.path)
        fileNewName = uuid.v4() + path.extname(file.name).toLowerCase()
        md5Str = md5(fileContent)
        UPYUN.setContentMD5 md5Str
        UPYUN.setFileSecret "yg"
        editorId = RequestData.get("editorid")
        @response.writeHead 200,
          'Content-Type': 'text/html'
          'Charset': 'utf-8'
        Async.runSync((done) ->
          UPYUN.writeFile '/'+fileNewName, fileContent, true, (err, data) ->
            unless err
              done null, err 
              #console.log data
              #console.log upyun.getWritedFileInfo("x-upyun-width")
              #console.log upyun.getWritedFileInfo("x-upyun-height")
              #console.log upyun.getWritedFileInfo("x-upyun-frames")
              #console.log upyun.getWritedFileInfo("x-upyun-file-type")
        )
        @response.end "<script>parent.UM.getEditor('" + editorId + "').getWidgetCallback('image')('" + fileNewName + "!small','SUCCESS')</script>";