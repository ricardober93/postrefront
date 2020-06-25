import React, { useState, useEffect } from "react";

export default function CrearPostre() {
  const tipos = ["torta", "cheesecake", "pie"];
  const [pedido, setpedido] = useState({
    tipo: "",
    tamano: "",
    queque: [],
    rellenos: [],
    baño: [],
    decoracion: [],
    toppings: [],
    valor: 0,
  });

  const handleTabs = (e) => {
    let tabs = document.querySelectorAll("#tab_item");
    let tabsArr = Array.prototype.slice.call(tabs);
    let paneles = document.querySelectorAll('#panel_item');
    let panelesArr = Array.prototype.slice.call(paneles);


    if (e.target.id === 'tab_item') {
            let i = tabsArr.indexOf(e.target);
            tabsArr.map(tab => tab.classList.remove('divide-blue-300'));
            tabsArr[i].classList.add('divide-blue-300')
            panelesArr.map(panel => panel.classList.remove('active_item'));
            panelesArr[i].classList.add('active_item')
        }
  }

  const handleType = (e) => {
    let li = document.querySelectorAll("li");
    let liArr = Array.prototype.slice.call(li);

    let paneles = document.querySelectorAll('#panel_item');
    let panelesArr = Array.prototype.slice.call(paneles);
    
    if (e.target.localName === 'li') {
            let i = liArr.indexOf(e.target)
            let tipo = liArr[i].textContent
            setpedido({
              ...pedido, tipo: tipo
            })
    panelesArr.map(panel => panel.classList.remove('active_item'));
    panelesArr[1].classList.add('active_item')
        }
        console.log(pedido);
  }

  const handleTall = e => {
    let tamanos = document.querySelectorAll("#tamanos");
    let tamanosArr = Array.prototype.slice.call(tamanos);

    let paneles = document.querySelectorAll('#panel_item');
    let panelesArr = Array.prototype.slice.call(paneles);

    if (e.target.id === 'tamanos') {
            let i = tamanosArr.indexOf(e.target)
            let text = tamanosArr[i].textContent
            setpedido({
              ...pedido, tamaño: text
            })
    panelesArr.map(panel => panel.classList.remove('active_item'));
    panelesArr[2].classList.add('active_item')
        }
        console.log(pedido);
  }


  const handleButtonDos = e => {
    let paneles = document.querySelectorAll('#panel_item');
    let panelesArr = Array.prototype.slice.call(paneles); 
    let i = panelesArr.indexOf(e.target)
    panelesArr.map(panel => panel.classList.remove('active_item'));
    panelesArr[i+2].classList.add('active_item')
  }

  const handleButtonTres = e => {
    let paneles = document.querySelectorAll('#panel_item');
    let panelesArr = Array.prototype.slice.call(paneles); 
    let i = panelesArr.indexOf(e.target)
    panelesArr.map(panel => panel.classList.remove('active_item'));
    panelesArr[i+3].classList.add('active_item')
  }

  const handleButtonCuatro = e => {
    let paneles = document.querySelectorAll('#panel_item');
    let panelesArr = Array.prototype.slice.call(paneles);
    let i = panelesArr.indexOf(e.target)
    panelesArr.map((panel) => panel.classList.remove('active_item'));
    panelesArr[i+4].classList.add('active_item')
    
  }

  const handleButtonCinco = e => {
    let paneles = document.querySelectorAll('#panel_item');
    let panelesArr = Array.prototype.slice.call(paneles);
    let i = panelesArr.indexOf(e.target)
    panelesArr.map((panel) => panel.classList.remove('active_item'));
    panelesArr[i+5].classList.add('active_item')
    
  }

  const handleRellenos = e => {
    let relleno = e.target.textContent;
    setpedido({
              ...pedido, rellenos: relleno
            })
            console.log(pedido);
  }



  return (
    <div className="w-full grid grid-cols-1">
      <div className="flex w-full  justify-center align-center">
        <div
          className="w-1/12 text-center bg-gray-400 h-8 active"
          onClick={handleTabs}
          id="tab_item"
        >
          1
        </div>
        <div
          className="w-1/12 text-center bg-gray-400 h-8"
          onClick={handleTabs}
          id="tab_item"
        >
          2
        </div>
        <div
          className="w-1/12 text-center bg-gray-400 h-8"
          onClick={handleTabs}
          id="tab_item"
        >
          3
        </div>
        <div
          className="w-1/12 text-center bg-gray-400 h-8"
          onClick={handleTabs}
          id="tab_item"
        >
          4
        </div>
        <div
          className="w-1/12 text-center bg-gray-400 h-8"
          onClick={handleTabs}
          id="tab_item"
        >
          5
        </div>
        <div
          className="w-1/12 text-center bg-gray-400 h-8"
          onClick={handleTabs}
          id="tab_item"
        >
          6
        </div>
        <div
          className="w-1/12 text-center bg-gray-400 h-8"
          onClick={handleTabs}
          id="tab_item"
        >
          7
        </div>
        <div
          className="w-1/12 text-center bg-gray-400 h-8"
          onClick={handleTabs}
          id="tab_item"
        >
          8
        </div>
      </div>
        <div className="flex w-full  justify-center align-center">
          <div className="w-full h-12 bg-blue-200 text-center panel_item active_item" id="panel_item">
            <ul className="flex justify-around align-middle">
                <li onClick={(e)=> handleType(e)} >Torta</li>
                <li onClick={(e)=> handleType(e)} >cheesecake</li>
                <li onClick={(e)=> handleType(e)} >Pie</li>
            </ul>
          </div>
          <div className="w-full h-12 bg-red-200 panel_item" id="panel_item">
          <ul className="flex justify-around align-middle">
                <li onClick={(e)=> handleTall(e)} id="tamanos" >tamaño 1</li>
                <li onClick={(e)=> handleTall(e)} id="tamanos" >tamaño 2</li>
                <li onClick={(e)=> handleTall(e)} id="tamanos" >tamaño 3</li>
            </ul>
          </div>
          <div className="w-full  bg-blue-200 panel_item" id="panel_item">
            <div className="grid grid-cols-3 gap-3 justify-center align-center">
                <div className="text-center">Tipo</div>
                <div className="text-center">
                  <ul className="flex justify-around">
                    <li className="" onClick={ e => handleRellenos(e)} id="rellenos">Helado Clásico</li>
                    <li className="" onClick={ e => handleRellenos(e)} id="rellenos">Helado Oreo</li>
                    <li className="" onClick={ e => handleRellenos(e)} id="rellenos">Helado Maracuya</li>
                    <li className="" onClick={ e => handleRellenos(e)} id="rellenos">Horneado Clasico</li>
                  </ul>
                  <ul className="flex justify-around">
                    <li onClick={ e => handleRellenos(e)}>Horneado de Chocolate</li>
                    <li onClick={ e => handleRellenos(e)}>Horneado de Frappuccino</li>
                    <li onClick={ e => handleRellenos(e)}>Horneado de menta con chispas de Chocolate</li>
                  </ul>
                </div>
                <div className="text-center">3</div>
            </div>
            <div className="flex justify-around align-center">
                <button className="button bg-tail-200" onClick={(e)=> handleButtonDos(e)} >Atras</button>
                <button className="button bg-tail-200" onClick={(e)=> handleButtonCuatro(e)} >Siguiente</button>
            </div>
          </div>
          <div className="w-full h-12 bg-red-200 panel_item" id="panel_item">
            <div></div>
            <div className="flex justify-around align-center">
                <button className="button bg-tail-200" onClick={(e)=> handleButtonTres(e)} >Atras</button>
                <button className="button bg-tail-200" onClick={(e)=> handleButtonCinco(e)} >Siguiente</button>
            </div>
          </div>
          <div className="w-full h-12 bg-blue-200 panel_item" id="panel_item">Base</div>
          <div className="w-full h-12 bg-red-200 panel_item" id="panel_item">6</div>
          <div className="w-full h-12 bg-blue-200 panel_item" id="panel_item">7</div>
          <div className="w-full h-12 bg-red-200 panel_item" id="panel_item">8</div>
      </div>
    </div>
  );
}
