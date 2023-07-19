import React from 'react';
import { useRouter } from 'next/router';
import PlantPage from '../../src/app/individual-user-plant/page';

export default function IndividualUserPlantPage() {
    const router = useRouter();
    const { id } = router.query;

    return <PlantPage plantId={id} />
}
