import { replaceInFile } from 'replace-in-file';

async function fixApostrophes() {
  try {
    const results = await replaceInFile({
      files: 'src/**/*.{tsx,jsx}',
      from: /([^a-zA-Z0-9])'([^a-zA-Z0-9])/g, // ' داخل متن
      to: "$1&apos;$2",
    });

    console.log('✅ Apostrophes replaced:', results.filter(r => r.hasChanged).length);
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

fixApostrophes();