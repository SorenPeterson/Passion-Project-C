require 'faker'

User.create(name: 'Richard', username: 'Ridou', encrypted_password: '123')

User.create(name: 'Michael', username: 'Mikey', encrypted_password: '213')


User.create(name: 'Jennifer', username: 'Jenn', encrypted_password: '321')

# 10.times do
#   User.create(name: Faker::Name.name, username: Faker::Internet.user_name)
# end

# 10.times do
#   Note.create(title: Faker::Hacker.sentence(1), description: Faker::Lorem.sentence(1), content: Faker::Lorem.sentence(8), user: rand(1..12))
# end

Note.create(title: 'Nostradamus', description: 'Here is where the truth is hold', content: 'The time is at hand, talking about the promised land.', user_id: 4)

Note.create(title: 'Omnii', description: 'The only way to get there', content: 'is with Jazz and a keleidoscope.', user_id: 4)

Note.create(title: 'Evernoticing Finances', description: 'Turn up! 0..100', content: 'Hello World', user_id: 4)
