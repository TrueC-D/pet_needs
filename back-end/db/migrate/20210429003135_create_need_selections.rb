class CreateNeedSelections < ActiveRecord::Migration[6.0]
  def change
    create_table :need_selections do |t|
      t.string :title
      t.text :description
      t.references :pet, null: false, foreign_key: true

      t.timestamps
    end
  end
end
