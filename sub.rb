require 'redis'
require 'json'

redis = Redis.new

redis.subscribe('publisher1') do |on|
  on.message do |channel, msg|
    data = JSON.parse(msg)
    puts "##{channel} - [#{data['user']}]: #{data['msg']}"
  end
end