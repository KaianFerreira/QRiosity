<script setup lang="ts">
import { ref, computed } from 'vue'
import QRCodeVue from 'qrcode.vue'
import { useClipboard } from '@vueuse/core'

const url = ref('')
const { copy, copied, paste } = useClipboard()
const qrRef = ref<InstanceType<typeof QRCodeVue> | null>(null)
const showDownloadOptions = ref(false)

const isValidUrl = computed(() => {
  try {
    new URL(url.value)
    return true
  } catch {
    return false
  }
})

const handlePasteClick = async () => {
  const text = await paste()
  url.value = text
}

const downloadQR = (format: 'svg' | 'png') => {
  const svg = qrRef.value?.$el as SVGElement
  if (!svg) return

  if (format === 'svg') {
    const serializer = new XMLSerializer()
    const svgStr = serializer.serializeToString(svg)
    const svgBlob = new Blob([svgStr], { type: 'image/svg+xml' })
    const downloadLink = document.createElement('a')
    downloadLink.href = URL.createObjectURL(svgBlob)
    downloadLink.download = 'qrcode.svg'
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
    URL.revokeObjectURL(downloadLink.href)
  } else {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const img = new Image()
    const svgData = new XMLSerializer().serializeToString(svg)
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' })
    const url = URL.createObjectURL(svgBlob)

    img.onload = () => {
      canvas.width = img.width
      canvas.height = img.height
      ctx?.drawImage(img, 0, 0)
      const pngUrl = canvas.toDataURL('image/png')
      const downloadLink = document.createElement('a')
      downloadLink.href = pngUrl
      downloadLink.download = 'qrcode.png'
      document.body.appendChild(downloadLink)
      downloadLink.click()
      document.body.removeChild(downloadLink)
      URL.revokeObjectURL(url)
    }
    img.src = url
  }
  showDownloadOptions.value = false
}
</script>

<template>
  <div class="animated-bg min-h-screen flex items-center justify-center p-4">
    <div class="bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl p-8 w-full max-w-md">
      <h1 class="text-3xl font-bold text-center mb-6 text-gray-800">QRiosity</h1>
      
      <div class="space-y-6">
        <div>
          <input 
            v-model="url" 
            type="text" 
            placeholder="Enter your URL here..."
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
          />
        </div>

        <div class="flex justify-center">
          <div v-if="isValidUrl" class="bg-gray-100 p-4 rounded-lg">
            <QRCodeVue 
              ref="qrRef"
              :value="url"
              :size="200"
              level="H"
              render-as="svg"
            />
          </div>
          <div v-else class="text-gray-500 text-center">
            Enter a valid URL to generate QR code
          </div>
        </div>

        <div class="flex gap-2">
          <button 
            @click="handlePasteClick"
            class="flex-1 py-2 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Paste URL
          </button>

          <div class="flex-1 relative">
            <button 
              @click="showDownloadOptions = !showDownloadOptions"
              :disabled="!isValidUrl"
              class="w-full py-2 px-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              Download QR
            </button>
            
            <div v-if="showDownloadOptions && isValidUrl" 
                 class="absolute top-full mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
              <button 
                @click="downloadQR('svg')"
                class="w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors"
              >
                Download as SVG
              </button>
              <button 
                @click="downloadQR('png')"
                class="w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors border-t border-gray-200"
              >
                Download as PNG
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animated-bg {
  background: linear-gradient(
    -45deg,
    #ff6b6b,
    #4ecdc4,
    #45b7d1,
    #96c93d,
    #e056fd,
    #20bf6b
  );
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}
</style>