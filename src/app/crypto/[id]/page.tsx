import { notFound } from "next/navigation"
import { getCryptoById } from "@/lib/crypto"
import { CryptoDetailView } from "@/components/CryptoDetailsView"
import type { CryptoDetailsPageParams } from "@/types"

export default async function CryptoDetailsPage({
	params
}: CryptoDetailsPageParams) {
	// asynchronous access of `params.id`.
	
	const { id } = await params
	const data = await getCryptoById(id)

	if (!data) return notFound()

	return <CryptoDetailView {...data} />
}
