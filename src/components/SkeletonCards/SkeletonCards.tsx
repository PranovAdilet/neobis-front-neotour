import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

interface IProps{
    count: number
    classname: string
}

const SkeletonCard = ({count, classname}: IProps) => {
    const skeletonCards = new Array(count).fill(0).map((_, idx) => (
        <div className={`${classname}__skeleton`} key={idx}>
            <Skeleton className={`${classname}__skeleton-card`} height={300} />
        </div>
    ));

    return <div className={`${classname}__skeleton-box`}>{skeletonCards}</div>;
}

export default SkeletonCard;