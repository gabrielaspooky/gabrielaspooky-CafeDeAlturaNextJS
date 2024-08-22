import React from 'react';
import { CreditCard, Banknote, Phone } from 'lucide-react';
import CopyrightFooter from '../../../components/ui/CopyrightFooter';
import Image from 'next/image';

const CheckoutPage = () => {
  return (
    <div className="bg-white min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-center text-green-900 mb-8">Checkout</h1>
        
        <div className="flex flex-col lg:flex-row justify-between">
          
          {/* Left Section - Payment and Shipping */}
          <div className="lg:w-3/4 w-full">
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Seleccionar método de pago</h2>
              
              <div className="border-b border-gray-300 py-4">
                <label className="flex items-center mb-4">
                  <input type="radio" name="payment" className="form-radio text-green-600" checked />
                  <CreditCard className="h-6 w-6 text-gray-600 ml-2" />
                  <span className="ml-2 text-sm font-semibold">Tarjeta de débito</span>
                  <span className="ml-2 text-sm text-gray-500">Opción estándar sin seguimiento</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Nombre del titular" className="form-input mt-1 block w-full" />
                  <input type="text" placeholder="Número de la tarjeta" className="form-input mt-1 block w-full" />
                  <input type="text" placeholder="Fecha de caducidad" className="form-input mt-1 block w-full" />
                  <input type="text" placeholder="CVC" className="form-input mt-1 block w-full" />
                </div>
              </div>
              
              <div className="border-b border-gray-300 py-4">
                <label className="flex items-center mb-2">
                  <input type="radio" name="payment" className="form-radio text-green-600" />
                  <Banknote className="h-6 w-6 text-gray-600 ml-2" />
                  <span className="ml-2 text-sm font-semibold">Transferencia bancaria</span>
                </label>
                <p className="text-sm text-gray-500 ml-8">Será necesario recibir el comprobante de la transferencia para preparar tu pedido</p>
              </div>
              
              <div className="py-4">
                <label className="flex items-center mb-2">
                  <input type="radio" name="payment" className="form-radio text-green-600" />
                  <span className="ml-2 text-sm font-semibold">Bizum</span>
                  <Image
          src={`/bizumlogo.png`}
          alt="Logo de Bizum"
          height={30}
          width={69}
          className="rounded-[20px]"
        />
                </label>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Dirección de envío</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Nombre" className="form-input mt-1 block w-full" />
                <input type="text" placeholder="Apellidos" className="form-input mt-1 block w-full" />
                <input type="text" placeholder="Teléfono" className="form-input mt-1 block w-full" />
                <input type="email" placeholder="Email" className="form-input mt-1 block w-full" />
                <select className="form-select mt-1 block w-full">
                  <option>Seleccionar País</option>
                </select>
                <input type="text" placeholder="Población" className="form-input mt-1 block w-full" />
                <input type="text" placeholder="CP" className="form-input mt-1 block w-full" />
                <input type="text" placeholder="Calle" className="form-input mt-1 block w-full" />
                <input type="text" placeholder="Nº" className="form-input mt-1 block w-full" />
                <input type="text" placeholder="Piso" className="form-input mt-1 block w-full" />
                <input type="text" placeholder="Puerta" className="form-input mt-1 block w-full" />
              </div>
            </div>
          </div>
          
          {/* Right Section - Cart Summary */}
          <div className="lg:w-1/4 w-full lg:ml-8 mt-8 lg:mt-0">
            <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
              <h3 className="text-lg font-semibold mb-6">Total del carrito</h3>
              <div className="flex justify-between mb-4">
                <span className="text-sm">SUBTOTAL</span>
                <span className="text-sm font-semibold">18,00 €</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-sm">ENVÍO</span>
                <span className="text-sm font-semibold">GRATIS</span>
              </div>
              <div className="flex justify-between mb-6">
                <span className="text-lg font-semibold">TOTAL</span>
                <span className="text-lg font-semibold">18,00 €</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">Incluye 3,78€ de IVA</p>
              <button className="w-full bg-green-900 text-white font-semibold py-2 rounded-lg hover:bg-green-800">
                Pagar y realizar pedido
              </button>
            </div>
          </div>
      </div>
      </div>
      <CopyrightFooter />
    </div>
  );
};

export default CheckoutPage;
