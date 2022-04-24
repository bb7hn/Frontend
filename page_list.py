import os 
dir_path = os.path.dirname(os.path.realpath(__file__))


sub_folders = [name for name in os.listdir(dir_path) if os.path.isdir(os.path.join(dir_path, name))]

url = "https://bb7hn.github.io/Frontend"

for folder in sub_folders:
    if(folder == ".git"):
        continue
    path = dir_path+'\\'+folder+"\\index.html"
    if(os.path.exists(path)):
        print('<a target="_blank" class="list_item row" href="'+url+'/'+folder+'"><span>'+folder+'</span></a>')
        