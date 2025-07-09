import Image from "next/image"

interface TeamCardProps {
  name: string
  role: string
  description: string
  imageUrl: string
}

export function TeamCard({
  name,
  role,
  description,
  imageUrl,
}: TeamCardProps) {
  return (
    <li>
      <Image
        className="h-48 w-48 rounded-full object-cover"
        src={imageUrl}
        alt={name}
        width={192}
        height={192}
      />
      <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
        {name}
      </h3>
      <p className="text-base leading-7 text-gray-600">{role}</p>
      <p className="text-sm leading-6 text-gray-500">{description}</p>
    </li>
  )
}
