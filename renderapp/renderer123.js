 const { ipcRenderer } = require('electron').ipcRenderer
 const { electron } = require('electron')
 const {BrowserWindow} = require('electron')
 const { contextBridge } = require('electron')
 const { app } = require('electron')
 const path = require('path')
 const remote = require('@electron/remote')
 const shell = require('electron').shell
/*  const remote = require('electron').remote */
 const os = require('os')
 const exec = require('child_process').exec;
 //const { exec } = require('node:child_process');
 const fs = require('fs')
const { setInterval } = require('timers')
 window.$ = window.jQuery = require('jquery')
 const http = require('http')
 const request = require('request')
 const download = require('download')
 const { dialog } = remote
// const SMB2 = require('smb2')
/*  const SambaClient = require('samba-client'); */

$(document).ready(function() {
  
////////////////////////////////////////////////////////////////
const music = new Audio('sound/login.wav');
music.play();
//////////////////////////////////////////////////////////////
const arr = [1, 2, 3, 4, 5, 6, 9, 7, 8, 9, 10];
arr.reverse();
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
/////////////////////////////////////////////////////////////////////
require('electron').ipcRenderer.on('ping', (event, message) => {
 console.log(message) // Prints 'whoooooooh!'
})  ////////////////////////////////////////////////////////////////
//buscarAct()
act()

});

function act() {
  //sacar vercion de appClient
  fs.readFile('../vercion_AppElectron.html', 'utf8', (error, vercion_AppClient) => {
    if (error)
      alert(error)
    //  $('.act').html(error)
    else
    console.log('vercion AppClient:'+vercion_AppClient)
    $('.act').html(vercion_AppClient)
    $('.offline').append('<br>'+'vercion AppClient:'+'<br>'+vercion_AppClient)
    
  }) 
// fin sacar vercion de appClient

 
 //sacando de vercion de Appclient
 const url = 'http://10.100.100.2:8050/Multimedia/Aplicaciones%20para%20la%20RED/1%20ServerApp/ELECTRON_MRB/vercion_AppElectron.html'
http.get(url,(res) => {
  // Image will be stored at this path
  const pathTemp = `${__dirname}/temp/vercion_AppElectronServer.html`; 
  const filePath = fs.createWriteStream(pathTemp);
 // const dataTemp = fs.readFile(pathTemp);
  res.pipe(filePath);
  filePath.on('finish',() => {
  filePath.close()
   })
 console.log('Download Archivo Act completado');
 /////////////////////////////////////////////////
setTimeout(() => {
  fs.readFile(pathTemp, 'utf8', (error, vercion_AppServer) => {
    if (error)
    $('.offline').append('<br>'+'vercion AppServer no esta disponible:'+'<br>'+error)
    //  $('.act').html(error)
    else
      console.log('vercion AppServer:'+vercion_AppServer)
      $('.offline').append('<br>'+'vercion AppServer:'+'<br>'+vercion_AppServer)
      //$('.act').html(vercion_AppElectron.toString())
  }) 
   
}, 5000);

 //sacando imfo de vercion_AppElectronServer
 
})




//alert(vercion_AppClient)
/* 
if (vercion_AppClient !== vercion_AppServer ) {
  console.log('Por favor actualise')
} */

  
}

//alert(vercion_AppClient)


             function buscarAct() {  
              

              setTimeout(() => {
                $('.act').html("buscando act")

           
           ////////// comprobar igualdad versiones  /////////

           
          


                setTimeout(() => {


         //  buscarActServer()
         
       //fin Busca actSrever///


      

         //coparar act 

             $('.act').html("la App esta actualizada")
             //////////////
             setTimeout(() => {
              buscarAct()
             }, 3000);
             
         
            }, 3000);

             }, 5000);
             
              
             
             }     
             
            // setInterval (buscarAct, 6500);
     //////////////////////////////////////////////////////////////////////////////
   
   /*  
    exec('net use \\10.100.100.2 /user:app app', (error, stdout, stderr) => {
      if (error) {
        console.error('No se a podido autentificar su app podria presentar problemas');
        return;
      }
      console.log(`stdout: ${stdout}`);
    //  console.error(`stderr: ${stderr}`);
    });

    exec('NET USE p: \\10.100.100.2 /PERSISTENT:YES', (error, stdout, stderr) => {
      if (error) {
        console.error('No se a podido montar la unidad consulte al admin');
        return;
      }
      console.log('unidad montada');
    //  console.error(`stderr: ${stderr}`);
    }); */

    







    

  function buscarActServer(e) { 

// URL of the image
//const url = 'GFG.jpeg';

}     
     
    // setInterval (buscarActServer, 6500);
     
     
/////////////////// Botones cemaforos ///////////////////////////
document.getElementById('min-btn').onclick = () => {      //////
  remote.BrowserWindow.getFocusedWindow().minimize();     //////     
 // electron.ipcRenderer.send('window-min');
 
} 


document.getElementById('close-btn').onclick = () => {
window.close()
}
 

document.getElementById('max-btn').onclick = () => {
  var electron = require('electron');
  electron.ipcRenderer.send('window-max');

}


////////////////////////////////////////////////////////////////////////

                    const isRunning = (query, cb) => {
                        let platform = process.platform;
                        switch (platform) {
                            case 'win32' : cmd = `tasklist`; break;
                            case 'darwin' : cmd = `ps -ax | grep ${query}`; break;
                            case 'linux' : cmd = `ps -A`; break;
                            default: break;
                        }

                        exec(cmd, (err, stdout, stderr) => {
                            cb(stdout.toLowerCase().indexOf(query.toLowerCase()) > -1);
                        });
                    }
 ////////////////////////////////////////////////////////////////////////                   
                    isRunning('electron_mrb.exe', (status) => {
                     // var estado = status;
                     if (status === "falce") {

                    //  $('.act').html('buscando ');

                     }

                   //  $('.act').html('AppEsritorio');
                    //alert(status)
                    // $('.act').html('buscando Act');
                    //  console.log(status); // true|false
                    })   
                    
               
 //////////////////////////////////////////////////////////////////                
                        
                    
 document.getElementById('bf45').onclick = () => {
  console.log('hello vscode!')  
} 


  /*  exec('dir', (error, stdout, stderr) => {
      if (error) {
        alert('No se pueden ejecutar comandos cmd consulte con el admin');
        return;
      }
      console.log('prueva sastisfactoria de comando dir');
    //  console.error(`stderr: ${stderr}`);
    });

    
    
    
////////////////////////////////////////////////////////////////////////

    exec('if exist P:\ELECTRON_MRB', (error, stdout, stderr) => {
      if (error) {
        console.error('unidad no momtada');
        console.log('montando unidad');
       
        return;
      }
      console.log('Unidad lista');
    //  console.error(`stderr: ${stderr}`);
    }); */



   // const targetId ="1"
  //  const devtoolsId = devtoolsView.getWebContentsId()
  //  ipcRenderer.send('window-max')
   // ipcRenderer.send('window-max');

     // shell.openPath('c:\\1.txt')
   //  var window = BrowserWindow.getFocusedWindow();
   //  window.minimize();
    // window.close()
   // window.relaunch()
   // minimize()


 
   

/* 
 $('.act').html('buscando Act'); */

/*  var exec = require('child_process').exec;

exec('tasklist', function(error, stdout, stderr) {
    var lines = stdout.trim().split("\n"); //split by line
    var processes = lines.slice(2); //remove the table headers
    var parsed = processes.map(function(process) {
        return process.match(/(.+?)[\s]+?(\d+)/); //match the process name and ID
    });
    var filtered = parsed.filter(function(process) {
        return /^ll_/.test(process[1]); //filter out process names starting with ll_
    });
    console.log(filtered);
});
 */
 /* console.log(os.cpus())
 console.log(os.cpus().length)
 console.log(os.hostname())
 console.log(os.arch())
 console.log(os.platform()) */
 //console.log(os.getCPUUsage())
 

/*  const SIZE = 1024;
function kb(bytes) { return bytes / SIZE }
function mb(bytes) { return kb(bytes) / SIZE }
function gb(bytes) { return mb(bytes) / SIZE }


console.log(os.freemem()); // ME DICE EN BYTES LA MEMORIA LIBRE QUE TENEMOS
 console.log(kb(os.freemem()));
 console.log(mb(os.freemem()));
 console.log(gb(os.freemem()));
 console.log(gb(os.totalmem())); // ME MUESTRA LA MEMORIA DISPONIBLE DEL PC 
 */
 
                    
/*  const openBtn = document.getElementById('openBtn')

 
 openBtn.addEventListener('bf4', function(event){
  //shell.openPath('c:\\demo.txt')
  //shell.showItemInFolder('c:\\netscan.exe')
}) */
 /* const { BrowserWindow } = electron.remote.BrowserWindow
  */
//alert('render')

/* 

 */

/* 
const version = process.getSystemVersion()
console.log(version) */

/* var es_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
if(es_chrome){
			    alert("El navegador que se está utilizando es Chrome");
} */
//alert(version)

/* 
app.setUserTasks([]) */

/* contextBridge. xposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => proceso. ersions.chrome,
  electron: () => process.versions.electron,
  // también podemos exponer variables, no sólo funciones
})
 */



/* document.getElementById('bf4').onclick = () => {
//new BrowserWindow({ show: false }) 
window.close()
  // window.open('http://bf.game.com/', '_blank', 'top=200,left=200') 
  // Send a IPC sync message to electron
  // See main.js on line 42
 // document.getElementById('ping-bad-response').innerText = ipcRenderer.sendSync('ping-bad', 'ping')
}
 */


// GOOD
/* document.getElementById('ping-good').onclick = () => {
  // Send a IPC async message to electron
  // See main.js on line 31
  ipcRenderer.send('ping-good', 'ping')
  document.getElementById('ping-good-response').innerText = 'Waiting..'
}
 */
// Receive reply from elecron
// See file main.js on line 37
/* ipcRenderer.on('ping-good-reply', (event, response) => {
  document.getElementById('ping-good-response').innerText = response
})

// BAD

  
//const {BrowserWindow} = require('electron').remote;
// Recuperar ventana */


      


       /* const url = 'http://10.100.100.2:8050/Multimedia/Aplicaciones%20para%20la%20RED/1%20ServerApp/ELECTRON_MRB/vercion_AppElectron.html'
       var terminal = require('child_process').spawn('bash');
        terminal.stdout.on('data', function (data) { 
          console.log('stdout: ' + data);
       }); 
        terminal.on('exit', function (code) {
           console.log('child process exited with code ' + code);
       }); 
        setTimeout(function() { console.log('Sending stdin to terminal');
         terminal.stdin.write('echo "Hello $USER. Your machine runs since:"\n');
          terminal.stdin.write('uptime\n'); 
          console.log('Ending terminal session');
           terminal.stdin.end(); 
          }, 1000);
 */

    
       /*  window.location.href = url;

      function download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
    
        element.style.display = 'none';
        document.body.appendChild(element);
    
        element.click();
    
        document.body.removeChild(element);
    }
    
    // Start file download.
    document.getElementById("dwn-btn").addEventListener("click", function(){
        // Generate download of hello.txt file with some content
        var text = document.getElementById("text-val").value;
        var filename = "hello.txt";
        
        download(filename, text);
    }, false); */
        // Url of the image
/* const file = url;
// Path at which image will get downloaded
const filePath = `${__dirname}/files`;
  
download(file,filePath)
.then(() => {
    console.log('Download Completed');
})
  */

      // URL of the image
      //const url = 'GFG.jpeg';
        
     /*  https.get(url,(res) => {
          // Image will be stored at this path
          const path = `${__dirname}/files/img.jpeg`; 
          const filePath = fs.createWriteStream(path);
          res.pipe(filePath);
          filePath.on('finish',() => {
              filePath.close();
              console.log('Download Completed'); 
          })
      }) */

      /* const download = (url, path, callback) => {
        request.head(url, (err, res, body) => {
        request(url)
        .pipe(fs.createWriteStream(path))
        .on('close', callback)
        })
        }
        
        
        const url = 'http://10.100.100.2:8050/Multimedia/Aplicaciones%20para%20la%20RED/1%20ServerApp/ELECTRON_MRB/vercion_AppElectron.html'
        const path = './include/copy.html'
        
        
        download(url, path, () => {
        console.log('✅ Done')
        })
 */


     /* 
       var request = http.get("http://10.100.100.2:8050/Multimedia/Aplicaciones%20para%20la%20RED/1%20ServerApp/ELECTRON_MRB/vercion_AppElectron.html", function(response) { 
         if (response.statusCode === 200) { 
          var file = fs.createWriteStream("copy.html"); 
         response.pipe(file);
         console.log(file);
         } // Add timeout.

          request.setTimeout(12000, function () {
            console.log(file);
             request.abort(); 
            }); 
          }); */
       /*    var download = function(url, dest, cb) { 
            var file = fs.createWriteStream(dest);
             var request = http.get(url, function(response) { 
               response.pipe(file);
                file.on('finish', function() { 
                  file.close(cb); // close() is async, call cb after close completes. 
                }); 
              }); 
            }

          download('http://10.100.100.2:8050/Multimedia/Aplicaciones%20para%20la%20RED/1%20ServerApp/ELECTRON_MRB/vercion_AppElectron.html', 'copy.html')
  */
      /*     var file = fs.createWriteStream("file.jpg"); 
          var request = http.get("http://10.100.100.2:8050/Multimedia/Aplicaciones%20para%20la%20RED/1%20ServerApp/ELECTRON_MRB/vercion_AppElectron.html", function(response) 
          { response.pipe(file); 
          });

          */



     /*  var SMB2 = require('smb2');

      // create an SMB2 instance
      var smb2Client = new SMB2({
        share: '\\\\10.100.100.2\\1 ServerApp',
        domain: 'DOMAIN',
        username: 'Home',
        password: 'Home..21167',
      });
 */
      /*  smb2Client.readFile('ELECTRON_MRB\\vercion_AppElectrobfn.txt', function(err, files){
        if(err) 
        throw err;
        else 
        console.log(files);
        
    });  */
 
    


/* 
     smb2Client.exists('ELECTRON_MRB\\vercion_AppElectron.html', function (err, exists) {
        if (err) throw err;
        console.log(exists);
    }); 
 */
     /* smb2Client.readFile('ELECTRON_MRB\\vercion_AppElectrobfn.txt', 'utf8', function(err, data){
        if(err) 
        console.log('no existe')
        else
        console.log(data);
       
    });  */
 
  /*   smb2Client.readFile('ELECTRON_MRB\\vercion_AppElectrobfn.txt', function(err, content) {
      if (err) throw err;
      console.log(content);
    });
 */
 /*    smb2Client.writeFile('ELECTRON_MRB\\vercion_AppElectrobfn.txt', 'Hello Node', function(err) {
      if (err) throw err;
      console.log("It's saved!");
    }); */
   
       /* 
     var SMB2 = require('smb2')

      // create an SMB2 instance
      var smb2Client = new SMB2({
        share:'\\\\10.100.100.2\\1 ServerApp'
      , domain:'DOMAIN'
      , username:'Home'
      , password:'Home..21167'
      });

      smb2Client.readdir('ELECTRON_MRB', function(err, files){
        if(err) throw err;
        console.log(files);
    }); */
     /*  const urlTex = "\\\\10.100.100.2\\1 ServerApp"
      const nombreArchivo='\\vercion_AppElectron.html'
      
      
      fs.readFileSync(urlTex+nombreArchivo,'utf-8', (err,data)=>{
      if (err){
      console.log("[Mol2]error:",err);
      } else{
      console.log(data);
      }


      });  */
 
   /*    fs.readFileSync('http://10.100.100.2:8050/Multimedia/Aplicaciones%20para%20la%20RED/1%20ServerApp/ELECTRON_MRB/vercion_AppElectron.html', (error, vercion_AppElectron) => {
   
      if (error)
          alert(error)
        //  $('.act').html(error)
        else
          
          $('.act').html(vercion_AppElectron.toString())
      })  */
/* 
      setTimeout(() => {
        $('.act').html("buscando act")

      }, 5000);
     
       */



     
