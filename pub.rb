require 'redis'
require 'json'

redis = Redis.new

data = {"user" => "user1"}

loop do
  msg = STDIN.gets
  redis.publish "publisher1", data.merge('msg' => msg.strip).to_json
end
