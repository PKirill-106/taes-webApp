import { ICertModal } from '@/types/interfacesProps'
import { X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import { Button } from '../ui/button'

export default function CertModal(props: ICertModal) {
	return (
		<AnimatePresence>
			{props.modalImage && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={() => props.setModalImage(null)}
					className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-6'
				>
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.8, opacity: 0 }}
						transition={{ duration: 0.3 }}
						className='relative max-w-xl w-full max-h-[90vh]'
						onClick={e => e.stopPropagation()}
					>
						<Button
							variant='ghost'
							onClick={() => props.setModalImage(null)}
							className='absolute text-white -top-4 md:-top-12 right-0 transition'
						>
							<X size={28} />
						</Button>

						<div className='relative w-full h-[65vh] md:h-[80vh]'>
							<Image
								src={props.modalImage}
								alt='Certificate'
								fill
								className='object-contain rounded-xl'
								unoptimized
							/>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
