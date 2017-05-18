class User < ApplicationRecord
  validates_presence_of :username, :password_digest, :session_token
  validates_uniqueness_of :username
  validates :password, length: {minimum: 6}, allow_nil: true

  after_initialize :ensure_session_token
  before_validation :ensure_unique_token

  has_many :songs

  attr_reader :password

  def self.find_by_credentials(username, password)
   user = User.find_by(username: username)
   return nil unless user
   user.is_password?(password) ? user : nil
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def is_password?(given_password)
    BCrypt::Password.new(self.password_digest).is_password?(given_password)
  end

  def reset_session_token!
    self.session_token = session_token_gen
    ensure_unique_token
    self.save
    self.session_token
  end

  private

  def ensure_unique_token
    while User.find_by(session_token: self.session_token)
      self.session_token = session_token_gen
    end
  end

  def ensure_session_token
    self.session_token ||= session_token_gen
  end

  def session_token_gen
    SecureRandom.urlsafe_base64(16)
  end
end
