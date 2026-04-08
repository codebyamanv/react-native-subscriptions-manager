import '@/global.css'
import { Link } from 'expo-router'
import { Text } from 'react-native'
import { styled } from 'nativewind'
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context'
const SafeAreaView = styled(RNSafeAreaView)
export default function App() {
    return (
        <SafeAreaView className="flex-1 bg-background p-5">
            <Text className="text-3xl text-success font-black">This is Aman Verma</Text>
            <Link href="/onboarding" className="bg-primary text-white rounded p-4 mt-4 font-bold text-xl">
                Go to Onboarding
            </Link>
            <Link href="/(auth)/sign-in" className="bg-primary text-white rounded p-4 mt-4 font-bold text-xl">
                Sign In
            </Link>
            <Link href="/sign-up" className="bg-primary text-white rounded p-4 mt-4 font-bold text-xl">
                Sign Up
            </Link>
            <Link href="/subscriptions/spotify" className="bg-primary text-white rounded p-4 mt-4 font-bold text-xl">
                Spotify Sub
            </Link>
            {/* <Link
                href={{ pathname: '/subscriptions/[id]', params: { id: 'spotify' } }}
                className="bg-primary text-white rounded p-4 mt-4 font-bold text-xl"
            >
                Spotify Subs
            </Link> */}
        </SafeAreaView>
    )
}
