import os
import pandas as pd

input_folder = 'b/'
output_folder = 'b/'
delimiter = '\t'  

if not os.path.exists(output_folder):
    os.makedirs(output_folder)

for filename in os.listdir(input_folder):
    if filename.endswith('.txt'):
        txt_path = os.path.join(input_folder, filename)
        excel_filename = os.path.splitext(filename)[0] + '.xlsx'
        excel_path = os.path.join(output_folder, excel_filename)

        try:
            df = pd.read_csv(txt_path, delimiter=delimiter, engine='python')

            df.to_excel(excel_path, index=False)

            print('Converted: {} → {}'.format(filename, excel_filename))
        except Exception as e:
            print('Error converting file {}: {}'.format(filename, str(e)))
