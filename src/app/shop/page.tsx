import ShopCatalog from '@/components/ShopCatalog';

interface ShopPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const params = await searchParams;
  const initialCategory = params.category ?? 'all';

  return (
    <div className="page-shell">
      <div className="container-custom">
        <ShopCatalog initialCategory={initialCategory} />
      </div>
    </div>
  );
}
