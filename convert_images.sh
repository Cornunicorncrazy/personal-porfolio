#!/bin/bash

IMAGE_DIR="images"

# Check if ImageMagick is installed
if ! command -v magick &> /dev/null
then
    echo "ImageMagick 'magick' command not found. Please install ImageMagick."
    echo "On Ubuntu/Debian: sudo apt-get install imagemagick webp"
    echo "On macOS: brew install imagemagick webp"
    echo "On Windows, you can download from imagemagick.org or use WSL."
    exit 1
fi

echo "Starting image conversion to WebP..."

for img_file in "$IMAGE_DIR"/*; do
    filename=$(basename -- "$img_file")
    extension="${filename##*.}"
    filename_no_ext="${filename%.*}"

    case "$extension" in
        jpg|JPG|jpeg|JPEG|png|PNG|heic|HEIC)
            webp_file="$IMAGE_DIR/$filename_no_ext.webp"
            if [ ! -f "$webp_file" ]; then
                echo "Converting $img_file to $webp_file"
                # Use -quality 80 for a good balance of quality and file size
                # For HEIC, ImageMagick needs libheif-examples or similar installed for full support
                magick "$img_file" -quality 80 "$webp_file"
                if [ $? -ne 0 ]; then
                    echo "Error converting $img_file. Skipping."
                fi
            else
                echo "WebP version of $filename already exists. Skipping $img_file."
            fi
            ;;
        mov|MOV)
            echo "Skipping video file: $img_file"
            ;;
        webp|WEBP)
            echo "Already WebP: $img_file"
            ;;
        *)
            echo "Skipping unknown file type: $img_file"
            ;;
    esac
done

echo "Image conversion complete."