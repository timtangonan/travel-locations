import DestinationCardSkeleton from "./DestinationCardSkeleton";

const DestinationCardSkeletonGroup = () => {
    return (
        <div className="bg-gray-100">
        <main className="container mx-auto pt-16 px-4 min-h-screen">
          <h1 className="text-6xl text-blue-600 font-black text-center">Travel Bucket List</h1>
          <p className="italic text-gray-600 font-thin text-center">sana all... </p>
          <div className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <DestinationCardSkeleton/>
            <DestinationCardSkeleton/>
            <DestinationCardSkeleton/>
          </div>
        </main>
      </div>
    )
}

export default DestinationCardSkeletonGroup