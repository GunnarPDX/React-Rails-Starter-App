class AddTimeToPost < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :time, :string
  end
end
