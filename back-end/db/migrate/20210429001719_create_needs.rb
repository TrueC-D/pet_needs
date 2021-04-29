class CreateNeeds < ActiveRecord::Migration[6.0]
  def change
    create_table :needs do |t|
      t.string :name
      t.text :description
      t.date :scheduled_date
      t.time :scheduled_time
      t.boolean :completed, default: false
      t.references :pet, null: false, foreign_key: true

      t.timestamps
    end
  end
end
