import { fetchFilteredCustomers } from "@/app/lib/data";
import { Metadata } from "next";
import { Suspense } from "react";
import Table from "@/app/ui/customers/table";

export const metadata: Metadata = {
  title: 'Customers',
}

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || ''
  const customers = await fetchFilteredCustomers(query)
  
  return (
    <div className="w-full">
      <Suspense fallback={<p>Loading...</p>}>
      <Table customers={customers} />
      </Suspense>
  </div>
  )
}
