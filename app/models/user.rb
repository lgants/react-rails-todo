class User < ApplicationRecord
  has_one :list
  has_many :tasks, through: :list
end
