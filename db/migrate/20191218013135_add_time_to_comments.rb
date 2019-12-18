class AddTimeToComments < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :time, :string
  end
end
