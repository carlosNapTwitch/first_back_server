const Pedido = require('./schema');
const DetallePedido = require('./detailSchema')


class PedidoModel {
    static async updateCart(detallePedidos) {
        detallePedidos.forEach(element => { 
            element.idPedido = ped[0]._id;
            const deta = new DetallePedido(element);      
            deta.save();
            console.log("DetallePedido Agregado");
        });
    }

    static async create() {
        nuevo.fechaRegistro = Date.now();
        nuevo.idProyecto = ObjectId(VariablesSistema.idProyectoBase);        
        const nuevopedido = await nuevo.save();              
        req.body.detallePedidos.forEach(element =>{ 
          element.idPedido = nuevo.id;  
          Producto.findById({_id: element.idProducto})
            .exec(function(err, prod){ 
             //esta parte es para agregar cada detalle,
              let deta = new DetallePedido(element);
                  deta.precio = prod.precioVenta;
              deta.save();
              console.log("Pedido Creado")
          });
        });
        const wfEstado = new WfEstado();       
        wfEstado.wf = "pedido";
        inicarWf.inicarWf(wfEstado);
    }
} 



router.post('/save/', async (req, res) =>{  
    try {
    const { idEmpresa, idCliente, detallePedidos } = new Pedido(req.body);
    const carToCheck = {
        idEmpresa: ObjectId(idEmpresa), 
        idCliente: ObjectId(idCliente), 
        estado: "EnCarrito"
    };
        const pedido = await Pedido.findOne(carToCheck);
        if(pedido) PedidoModel.updateCart(detallePedidos)
        PedidoModel.create();
        res.json({message: 'Pedido Guardado', status: 200});
    } catch (error) {
        res.status(400).send({ status: 400, text: err});
    } 
  });
  