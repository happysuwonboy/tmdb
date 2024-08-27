import React from 'react';
import Image from 'next/image';
import getImagePath from '@/utils/getImagePath';
import { cn } from '@/lib/utils';

const ActorCard = ({
  actor,
  className,
}: {
  actor: any;
  className?: string;
}) => {
  return (
    <li className={cn('flex-shrink-0 group cursor-pointer', className)}>
      <figure className=" border-[#EEEEEE] border-solid border-[5px]">
        <div className="w-[160px] h-[240px] relative overflow-hidden">
          <Image
            fill
            src={getImagePath(actor.profile_path) || '/film1.jpg'}
            className="object-cover group-hover:scale-110 transition-all duration-500"
            alt="배우 사진"
          />
        </div>
        <figcaption className="bg-deepblue text-[14px] px-2 w-[160px] h-[60px] p-[10px] group-hover:bg-[#03b3e4] transition-all duration-500">
          <span className="block text-[#8ccda2] font-semibold truncate group-hover:text-[#EEEEEE] transition-all duration-500">
            {actor.name}
          </span>
          <span className="block text-[#EEEEEE] truncate">
            {`'${actor.character}' 역`}
          </span>
        </figcaption>
      </figure>
    </li>
  );
};

export default ActorCard;