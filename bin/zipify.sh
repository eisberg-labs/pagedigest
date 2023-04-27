# Read the package name and version from package.json
package_name=$(node -p "require('./package.json').name")
package_version=$(node -p "require('./package.json').version")

# Create the zip file with the desired naming convention
zip_file="${package_name}_${package_version}.zip"
zip -r "dist/$zip_file" -j dist
