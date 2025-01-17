var orgFIleUrl = app.project.file;
        
         var comp = app.project.activeItem;
        if ((orgFIleUrl != null) && (comp!=null))
        {
            var rootfolder = orgFIleUrl.toString ().substr (0,  orgFIleUrl.toString ().lastIndexOf ('/'));
            alert(rootfolder);
            var comp = app.project.activeItem;
            app.project.reduceProject(comp) ;
            
            var save_file = new File(rootfolder + "//" + comp.name +".aep");
 
            new_project = app.project.save(save_file);

            var my_file = new File(orgFIleUrl);
            new_project = app.open(my_file);
            if (new_project){
            alert(new_project.file.name);
            }

             
           
        }else alert('nada');