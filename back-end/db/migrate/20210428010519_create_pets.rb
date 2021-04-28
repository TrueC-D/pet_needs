class CreatePets < ActiveRecord::Migration[6.0]
  def change
    create_table :pets do |t|
      t.string :species
      t.string :name
      t.string :birthday
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
