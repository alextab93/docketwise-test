# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# 1: Folder
# 2: 

folder = Entity.create(name: 'Test1', type_of: 'folder')

folder.make_file 'test1.jpg', 'http://images.com/test1.jpg'
folder.make_file 'test2.jpg', 'http://images.com/test2.jpg'

folder2 = folder.make_folder 'Test2'

folder2.make_file 'test3.jpg', 'http://images.com/test3.jpg'
folder2.make_file 'test4.jpg', 'http://images.com/test4.jpg'

folder3 = folder2.make_folder 'Test3'

folder3.make_file 'test5.jpg', 'http://images.com/test5.jpg'
folder3.make_file 'test6.jpg', 'http://images.com/test6.jpg'


# Test
# \ test1.jpg
# \ test2.jpg
# \ Test2
# \ \ test3.jpg