class CreateTrainings < ActiveRecord::Migration[6.1]
  def change
    create_table :trainings do |t|
      t.date :date
      t.float :time
      t.integer :puzzles
      t.integer :points
      t.string :comments

      t.timestamps
    end
  end
end
