require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module ChillCloud
  class Application < Rails::Application

    config.paperclip_defaults = {
      :storage => :s3,
      :s3_credentials => {
        s3_host_name: "s3-#{ENV['s3_region']}.amazonaws.com",
        :bucket => ENV["s3_bucket"],
        :access_key_id => ENV["s3_access_key_id"],
        :secret_access_key => ENV["s3_secret_access_key"],
        :s3_region => ENV["s3_region"]
      }
    }
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end

# {
#   "Version": "2012-10-17",
#   "Statement": [
#     {
#       "Sid": "Stmt1420751757000",
#       "Effect": "Allow",
#       "Action": [
#         "s3:*"
#       ],
#       "Resource": [
#         "arn:aws:s3:::chillcloud-dev",
#         "arn:aws:s3:::chillcloud-dev/*",
#         "arn:aws:s3:::chillcloud-pro",
#         "arn:aws:s3:::chillcloud-pro/*"
#       ]
#     }
#   ]
# }
#
