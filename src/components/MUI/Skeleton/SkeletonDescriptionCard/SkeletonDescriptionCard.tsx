import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

interface IProps{
    count: number
    classname: string
}

const SkeletonDescriptionCard = ({count, classname}: IProps) => {

    const skeletonCards = new Array(count).fill(0).map((_, idx) => (
        <div className={`description__skeleton`} key={idx}>
            <Skeleton className={`description__skeleton-card`} height={600} width={'100%'} />
            <div className="description__skeleton-bottom">
                <Skeleton className={`description__skeleton-card`} height={50} width={'100%'} />
                <Skeleton className={`description__skeleton-card`} height={30} width={300} />
                <Skeleton className={`description__skeleton-card`} height={50} width={'100%'} />
                <Skeleton className={`description__skeleton-card`} height={30} width={300} />
                <Skeleton className={`description__skeleton-card`} height={50} width={'100%'} />
                <Skeleton className={`description__skeleton-card`} height={30} width={300} />
                <Skeleton className={`description__skeleton-card`} height={50} width={'100%'} />
                <Skeleton className={`description__skeleton-card`} height={30} width={300} />

            </div>

        </div>
    ));

    return <div className={`description__skeleton-box`}>{skeletonCards}</div>;
}

export default SkeletonDescriptionCard;