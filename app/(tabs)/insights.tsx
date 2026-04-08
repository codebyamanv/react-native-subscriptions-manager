import React from 'react'
import { Text } from 'react-native'
import { styled } from 'nativewind'
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context'
const SafeAreaView = styled(RNSafeAreaView)

export default function Insights() {
    return (
        <SafeAreaView>
            <Text>Insights</Text>
        </SafeAreaView>
    )
}
