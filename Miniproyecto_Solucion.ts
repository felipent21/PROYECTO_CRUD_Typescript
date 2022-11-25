class Empleados{
    id:number=0;
    cargo:string='';
    sueldo:number=0;
    empleados:Array<any>=[]; 
    }
    
    interface Iempleados extends Empleados{
    getAll():void;
    getById(id:number):void;
    getByName(cargo:string):void;
    create(id:number,cargo:string,sueldo:number):void;
    update(id:number,cargo:string,sueldo:number):void;
    delete(id:number):void;
    }
    
    class Repositoryempleados implements Iempleados{

    id:number = 0;
    cargo:string ='';
    sueldo:number = 0; 
    
    empleados = [
    {id: 1, cargo:'mecanico', sueldo:2000},
    {id: 2, cargo:'secretaria', sueldo:1000},
    {id: 3, cargo:'operador', sueldo:3000}
    ]
    
    getAll():void{   

            this.empleados.forEach(function(index) {                      
            console.log(index.id,index.cargo,index.sueldo); 
            
             })

             const empeladosstr = JSON.stringify(this.empleados);              
             alert(empeladosstr);
    }

    getById(id:number):void{

        this.empleados.forEach(function(index) {
            if (index.id == id) {                
                console.log(index.id,index.cargo,index.sueldo);
                alert("ID:"+index.id+"\nCARGO:"+index.cargo+"\nSUELDO:"+index.sueldo);
            }
        }
        )
    }

    getByName(cargo:string):void{

        this.empleados.forEach(function(index) {
            if (index.cargo == cargo) {                
                console.log(index.id,index.cargo,index.sueldo);
                alert("ID:"+index.id+"\nCARGO:"+index.cargo+"\nSUELDO:"+index.sueldo);
            }
        }
        )

    }

    create(id:number,cargo:string,sueldo:number):void{

          
        this.empleados.push({id: id, cargo: cargo, sueldo:sueldo});  
        alert("REGISTRO CREADO SATISFACTORIAMENTE");   
         

    }

    update(id:number,cargo:string,sueldo:number):void{ 

        let index = this.empleados.findIndex(obj => obj.id == id);
        this.empleados[index].cargo = cargo;     
        this.empleados[index].sueldo = sueldo;

        alert("REGISTRO ACTUALIZADO SATISFACTORIAMENTE");
                  
        

    }

    delete(id:number):void{ 
        
        this.empleados.forEach((item,index,arr)=>{
            if(item.id==id)
            { arr.splice(index,1 )}             
           })

           alert("REGISTRO ELIMINADO SATISFACTORIAMENTE");

    }  
    }    
     
     let repositorio = new Repositoryempleados();     
     let opc = 0;
     do {
        
        opc = Number(prompt('SELECCIONE UNA OPCION \n1.CREAR\n2.VER\n3.VER X ID\n4.VER X NOMBRE\n5.ACTUALIZAR\n6.ELIMINAR\n7.SALIR'));
        
        switch (opc) {
            case 1:
                
                  let id = Number (prompt("INGRESA EL ID"));
                  let cargo = String (prompt("INGRESA EL CARGO"));
                  let sueldo = Number (prompt("INGRESA EL SUELDO"));
                  repositorio.create(id,cargo,sueldo);
                  alert("REGISTRO CREADO EXITOSAMENTE");
            break;
            case 2:
                  repositorio.getAll();
            break;
            case 3:
                 id = Number (prompt("INGRESA EL ID"));
                 repositorio.getById(id);
            break;
            case 4:
                cargo = String (prompt("INGRESA EL CARGO"));
                repositorio.getByName(cargo);
            break;
            case 5:
                id = Number (prompt("INGRESA EL ID"));
                cargo = String (prompt("INGRES EL CARGO"));
                sueldo = Number (prompt("INGRESA EL SUELDO"));
                repositorio.update(id,cargo,sueldo);

            break;
            case 6:
                id = Number (prompt("INGRESA EL ID"));
                repositorio.delete(id);
            break;
            default:

            alert("INGRESA UNA OPCION VALIDA");

            break;
        }
        
     } while (opc != 7);
