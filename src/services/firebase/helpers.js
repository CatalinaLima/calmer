// Importa tu instancia de Firebase
import { db } from '../services/firebaseConfig';

// Importa la función addDoc de Firestore
import { addDoc, collection } from '@firebase/firestore';

// Importa tu array de libros
import { products } from '../data/books';

// Función para agregar libros a Firestore
const agregarLibrosAFirestore = async () => {
  try {
    console.log('Comenzando el proceso de agregar libros a Firestore...');
    // Recorre el array de libros y agrégalo a Firestore
    for (const libro of products) {
      console.log(`Intentando agregar el libro "${libro.name}"...`);
      // Utiliza la función addDoc para agregar el documento a la colección "products"
      await addDoc(collection(db, 'products'), libro);
      console.log(`Libro "${libro.name}" agregado a Firestore.`);
    }

    console.log('Todos los libros se han agregado correctamente a Firestore.');
  } catch (error) {
    console.error('Error al agregar libros a Firestore:', error);
  }
};

// Llama a la función para agregar libros a Firestore
agregarLibrosAFirestore();






