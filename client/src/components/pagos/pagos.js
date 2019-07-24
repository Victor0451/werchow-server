import React, { Component } from 'react';
import {
    Pagination,
    PaginationItem,
    PaginationLink
} from "reactstrap";


let prev = 0;
//let next = 0;
let last = 0;
//let first = 0;


export default class Pagos extends Component {

    componentDidMount() {
        const { pagos } = this.props;

        this.setState({
            pagos: pagos
        })

    }

    constructor() {
        super();
        this.state = {
            pagos: [],
            currentPage: 1,
            todosPerPage: 5,

        };
        this.handleClick = this.handleClick.bind(this);
        this.handleLastClick = this.handleLastClick.bind(this);
        this.handleFirstClick = this.handleFirstClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    handleLastClick(event) {
        event.preventDefault();
        this.setState({
            currentPage: last
        });
    }
    handleFirstClick(event) {
        event.preventDefault();
        this.setState({
            currentPage: 1
        });
    }

    render() {

        let { pagos, currentPage, todosPerPage } = this.state;

        // Logic for displaying current todos
        let indexOfLastTodo = currentPage * todosPerPage;
        let indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        let currentTodos = pagos.slice(indexOfFirstTodo, indexOfLastTodo);
        prev = currentPage > 0 ? (currentPage - 1) : 0;
        last = Math.ceil(pagos.length / todosPerPage);
        //let next = (last === currentPage) ? currentPage : currentPage + 1;

        // Logic for displaying page numbers
        let pageNumbers = [];
        for (let i = 1; i <= last; i++) {
            pageNumbers.push(i);
        }


        return (
            <div className="container">

                <h1><i className="fas fa-wallet"></i> Cuotas</h1>
                <table className="table table-hover">
                    <thead className="alert alert-dark">
                        <tr>
                            <th scope="col">Contrato</th>
                            <th scope="col">Mes</th>
                            <th scope="col">Año</th>
                            <th scope="col">Serie</th>
                            <th scope="col">N° Recibo</th>
                            <th scope="col">Importe</th>
                            <th scope="col">Dia de Pago</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {currentTodos.map((pago, index) => (

                            <tr key={index}>
                                <td >
                                    {pago.CONTRATO}
                                </td>
                                <td>
                                    {pago.MES}
                                </td>
                                <td>
                                    {pago.ANO}
                                </td>
                                <td>
                                    {pago.SERIE}
                                </td>

                                <td>
                                    {pago.NRO_RECIBO}
                                </td>
                                <td>
                                    {pago.IMPORTE}
                                </td>
                                <td>
                                    {pago.DIA_PAG}

                                </td>
                            </tr>


                        ))}
                    </tbody>
                </table>

                <nav className="d-flex justify-content-center">
                    <Pagination>
                        <PaginationItem>
                            {prev === 0 ? <PaginationLink disabled>First</PaginationLink> :
                                <PaginationLink onClick={this.handleFirstClick} id={prev} href={prev}>First</PaginationLink>
                            }
                        </PaginationItem>
                        <PaginationItem>
                            {prev === 0 ? <PaginationLink disabled>Prev</PaginationLink> :
                                <PaginationLink onClick={this.handleClick} id={prev} href={prev}>Prev</PaginationLink>
                            }
                        </PaginationItem>
                        {
                            pageNumbers.map((number, i) =>
                                <Pagination key={i}>
                                    <PaginationItem active={pageNumbers[currentPage - 1] === (number) ? true : false} >
                                        <PaginationLink onClick={this.handleClick} href={number} key={number} id={number}>
                                            {number}
                                        </PaginationLink>
                                    </PaginationItem>
                                </Pagination>
                            )}

                        <PaginationItem>
                            {
                                currentPage === last ? <PaginationLink disabled>Next</PaginationLink> :
                                    <PaginationLink onClick={this.handleClick} id={pageNumbers[currentPage]} href={pageNumbers[currentPage]}>Next</PaginationLink>
                            }
                        </PaginationItem>

                        <PaginationItem>
                            {
                                currentPage === last ? <PaginationLink disabled>Last</PaginationLink> :
                                    <PaginationLink onClick={this.handleLastClick} id={pageNumbers[currentPage]} href={pageNumbers[currentPage]}>Last</PaginationLink>
                            }
                        </PaginationItem>
                    </Pagination>
                </nav>



            </div>
        )
    }
}



