class Entity < ApplicationRecord
  enum type_of: [ :folder, :file ]

  def make_file name, url
    Entity.create(parent: self.id, type_of: 'file', name: name, url: url)
  end

  def make_folder name
    Entity.create(parent: self.id, type_of: 'folder', name: name)
  end

end
