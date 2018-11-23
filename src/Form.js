import React, { Component } from 'react';
import {Boxin} from 'react-icons/fa';
class Form extends Component {
    render() {

        return (
                        <div className="shadow p-3 mb-5 rounded" action="mailto:someone@example.com">
                            <div>
                                    <div className="shadow p-3 mb-5 rounded bg text-center bg-info mx-auto text-light"><span className="display-4">Contactenos</span></div>

                                    <div className="md-form">
                                        <i className="fa fa-user prefix grey-text"></i>
                                        <label for="form-name">Nombre</label>
                                        <input type="text" id="form-name" className="form-control" placeholder="Ejemplo: Ivan Aldama"/>
                                    </div>

                                    <div className="md-form">
                                        <i className="fa fa-envelope prefix grey-text"></i>
                                        <label for="form-email">Correo electronico</label>
                                        <input type="text" id="form-email" className="form-control" placeholder="abc123@dominio.sub"/>
                                    </div>

                                    <div className="md-form">
                                        <i className="fa fa-tag prefix grey-text"></i>
                                        <label for="form-Subject">Asunto</label>
                                        <input type="text" id="form-Subject" className="form-control" placeholder="Clases"/>
                                    </div>

                                    <div className="md-form">
                                        <i className="fa fa-pencil prefix grey-text"></i>
                                        <label for="form-text">Descripcion</label>
                                        <textarea type="text" id="form-text" className="form-control md-textarea" rows="3" placeholder="Que neceiso para asisitr a clase"></textarea>
                                    </div>

                                    <div className="text-center mt-4">
                                        <button className="btn btn-light-blue">Submit</button>
                                    </div>

                            </div>
                        </div>

        );
    }
}
export default Form;