import { motion } from 'framer-motion'

const DestinationCard = ({ location, country, locationLink, preview }) => {
    return (
        <motion.a href={locationLink} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-white shadow-md px-8 py-10 hover:shadow-xl w-full cursor-pointer" whileHover={{ scale: 1.05 }}>
            <h2 className="text-2xl font-bold text-gray-600">{location}</h2>
            <h3 className="text-lg font-light text-gray-500">{country}</h3>
            <img className="rounded mt-4" src={preview} alt="destination"/>
        </motion.a>
    )
}

export default DestinationCard