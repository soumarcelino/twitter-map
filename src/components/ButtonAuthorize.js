import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Launch from '@material-ui/icons/Launch';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default class ButtonAuthorize extends Component {
    state = {
        open: false,
    };
    
    handleClickOpen = () => {
        this.setState({ open: true });
    };
    
    handleClose = () => {
        this.setState({ open: false });
    };
    
    render (){
        return (
            <div>
              <Button onClick={this.handleClickOpen} variant="contained" color="primary">
                Acessar sua conta do Twitter <Launch style={{paddingLeft : 7}}/> 
              </Button>
            <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="dialog-title" >
            <DialogTitle id="dialog-title">Autorização</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Deseja que o Twitter autorize a aplicação utilizar os dados de sua conta?
              </DialogContentText>
           
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancelar
              </Button>
              <Button onClick={this.handleClose} color="primary">
                Autorizar
              </Button>
            </DialogActions>
          </Dialog>
          </div>
        )
    }
}