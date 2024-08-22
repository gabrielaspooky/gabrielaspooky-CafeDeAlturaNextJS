import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <Head>
        <title>Bienvenido a Cafe de Altura</title>
        <meta name="description" content="La mejor cafetería en la ciudad. Explora nuestras ofertas y disfruta del mejor café." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
        <h1 className="text-4xl font-bold mb-6">Bienvenido a Cafe de Altura</h1>
        <p className="text-lg mb-4">Descubre nuestra selección exclusiva de cafés y productos gourmet.</p>
        <Link href="/about">
          <a className="px-6 py-3 bg-brown-700 text-white rounded hover:bg-brown-800 transition duration-300">
            Conoce más sobre nosotros
          </a>
        </Link>
      </main>
      <footer className="flex justify-center items-center py-4 bg-gray-800 text-white">
        <p>&copy; 2024 Cafe de Altura. Todos los derechos reservados.</p>
      </footer>
    </>
  );
};

export default Home;
