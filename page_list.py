import os 
dir_path = os.path.dirname(os.path.realpath(__file__))


sub_folders = [name for name in os.listdir(dir_path) if os.path.isdir(os.path.join(dir_path, name))]

url = "https://bb7hn.github.io"

for folder in sub_folders:
    if(folder == ".git"):
        continue
    print('<a href="'+url+'/'+folder+'">'+folder+'</a>')