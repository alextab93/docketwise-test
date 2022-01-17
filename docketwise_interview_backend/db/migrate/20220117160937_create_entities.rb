class CreateEntities < ActiveRecord::Migration[6.0]
  def change
    create_table :entities do |t|
      t.integer :type_of
      t.string :label
      t.string :name
      t.string :parent
      t.string :url

      t.timestamps
    end
  end
end