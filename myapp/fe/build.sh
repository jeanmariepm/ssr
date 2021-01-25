rm -rf build
export appname=`dirname $PWD`
export appname=`basename $appname`
echo $appname
parcel build index.html -d build --public-url "/static/$appname"
mv build/index.html "../templates/$appname/"
cp -R build/ "../static/$appname"