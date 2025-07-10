
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export const products: Record<string, Product[]> = {
  racoes: [
    {
      id: 'racao-1',
      name: 'Ração Premier Pet Cães Adultos',
      price: 89.90,
      image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400',
      category: 'racao'
    },
    {
      id: 'racao-2',
      name: 'Ração Royal Canin Gatos Adultos',
      price: 124.50,
      image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=400',
      category: 'racao'
    },
    {
      id: 'racao-3',
      name: 'Ração Golden Formula Filhotes',
      price: 67.80,
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400',
      category: 'racao'
    },
    {
      id: 'racao-4',
      name: 'Ração Pedigree Cães Adultos',
      price: 45.90,
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400',
      category: 'racao'
    },
    {
      id: 'racao-5',
      name: 'Ração Whiskas Gatos Castrados',
      price: 78.60,
      image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400',
      category: 'racao'
    },
    {
      id: 'racao-6',
      name: 'Ração Biofresh Cães Sênior',
      price: 95.40,
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400',
      category: 'racao'
    }
  ],
  petiscos: [
    {
      id: 'petisco-1',
      name: 'Petisco DogShow Bifinho',
      price: 12.90,
      image: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=400',
      category: 'petisco'
    },
    {
      id: 'petisco-2',
      name: 'Snack Natural Orelha de Porco',
      price: 8.50,
      image: 'https://images.unsplash.com/photo-1608344989906-9668d4c56ba9?w=400',
      category: 'petisco'
    },
    {
      id: 'petisco-3',
      name: 'Petisco Bassar Palito',
      price: 15.70,
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400',
      category: 'petisco'
    },
    {
      id: 'petisco-4',
      name: 'Biscoito Pedigree Dentastix',
      price: 22.80,
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400',
      category: 'petisco'
    },
    {
      id: 'petisco-5',
      name: 'Petisco Gatos Dreamies',
      price: 18.90,
      image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400',
      category: 'petisco'
    },
    {
      id: 'petisco-6',
      name: 'Osso Natural Defumado',
      price: 11.40,
      image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400',
      category: 'petisco'
    }
  ],
  brinquedos: [
    {
      id: 'brinquedo-1',
      name: 'Bola de Tênis para Cães',
      price: 6.90,
      image: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=400',
      category: 'brinquedo'
    },
    {
      id: 'brinquedo-2',
      name: 'Mordedor Corda Colorida',
      price: 14.50,
      image: 'https://images.unsplash.com/photo-1608344989906-9668d4c56ba9?w=400',
      category: 'brinquedo'
    },
    {
      id: 'brinquedo-3',
      name: 'Ratinho de Pelúcia para Gatos',
      price: 9.80,
      image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=400',
      category: 'brinquedo'
    },
    {
      id: 'brinquedo-4',
      name: 'Frisbee Resistente',
      price: 18.70,
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400',
      category: 'brinquedo'
    },
    {
      id: 'brinquedo-5',
      name: 'Varinha com Penas',
      price: 12.30,
      image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400',
      category: 'brinquedo'
    },
    {
      id: 'brinquedo-6',
      name: 'Kong Recheável',
      price: 32.90,
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400',
      category: 'brinquedo'
    }
  ],
  medicamentos: [
    {
      id: 'medicamento-1',
      name: 'Antipulgas Advantage',
      price: 45.80,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400',
      category: 'medicamento'
    },
    {
      id: 'medicamento-2',
      name: 'Vermífugo Drontal Plus',
      price: 38.50,
      image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?w=400',
      category: 'medicamento'
    },
    {
      id: 'medicamento-3',
      name: 'Shampoo Medicinal Virbac',
      price: 42.90,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
      category: 'medicamento'
    },
    {
      id: 'medicamento-4',
      name: 'Colírio Oftálmico',
      price: 28.70,
      image: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=400',
      category: 'medicamento'
    },
    {
      id: 'medicamento-5',
      name: 'Suplemento Articular',
      price: 89.60,
      image: 'https://images.unsplash.com/photo-1608344989906-9668d4c56ba9?w=400',
      category: 'medicamento'
    },
    {
      id: 'medicamento-6',
      name: 'Protetor Solar Pet',
      price: 34.20,
      image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=400',
      category: 'medicamento'
    }
  ]
};
