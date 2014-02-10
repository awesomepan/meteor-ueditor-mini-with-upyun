# from https://github.com/johnnyfreeman/request-data.git

# local store used for 
# building request data
GET = {}
POST = {}
FILE = {}

# Server only
if Meteor.isServer
  connect = Npm.require("connect")
  # parse the POST data
  
  #.use(connect.multipart({ uploadDir: path }))
  # parse the GET data
  
  # intercept data and send continue
  WebApp.connectHandlers.use(connect.bodyParser()).use(connect.query()).use (req, res, next) ->
    FILE = req.files
    POST = req.body
    GET = req.query
    next()

if Meteor.isClient
  
  # form GET object
  query = window.location.search
  queryString = query.slice(1, query.length)
  kvPairs = queryString.replace(/\+/g, " ").split("&")
  i = 0

  while i < kvPairs.length
    kv = kvPairs[i].split("=")
    k = decodeURIComponent(kv[0])
    v = decodeURIComponent(kv[1])
    GET[k] = v
    i++

# POST data not available on the client

# Namespace for our request data methods 
# on both the server and the client
RequestData = {}

# Getter for GET data
RequestData.get = (key) ->
  throw new Meteor.Error(404, "GET param not found")  unless GET.hasOwnProperty(key)
  GET[key]


# Getter for POST data
RequestData.post = (key) ->
  throw new Meteor.Error(404, "POST param not found")  unless POST.hasOwnProperty(key)
  POST[key]


# Getter for POST data
RequestData.file = (key) ->
  throw new Meteor.Error(404, "file param not found")  unless FILE.hasOwnProperty(key)
  FILE[key]