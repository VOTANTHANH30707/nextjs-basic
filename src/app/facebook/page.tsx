'use client';
import { useRouter } from 'next/navigation';

const Facebook = () => {
    const router = useRouter();
    const handleBtn = () => {
        // alert('Facebook');
        router.push('/'); // Navigate to home page
    }

    return (
        <div>
            facebook <br />
            <div>
                <button onClick={handleBtn}>back home</button>
            </div>
        </div>
    );
}

export default Facebook;
