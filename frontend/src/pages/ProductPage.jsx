import { useParams } from 'react-router-dom';

export default function ProductPage() {
  const { id } = useParams();
  return (
    <main>
      <h1>📦 Деталі продукту #{id}</h1>
      <p>Тут буде інформація про продукт</p>
    </main>
  );
}