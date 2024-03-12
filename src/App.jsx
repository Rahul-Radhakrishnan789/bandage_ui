import { Box, Grid, Button, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import CorouselItem from "./components/Corousel";
import PrimaryCards from "./components/PrimaryCards";
import BestSellerCards from "./components/BestSellerCards";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CommentIcon from "@mui/icons-material/Comment";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import "./App.css";

function App() {
  const carouselItems = [
    {
      image:
        "https://c4.wallpaperflare.com/wallpaper/255/165/210/hamburger-french-fries-fast-food-chicken-nuggets-wallpaper-preview.jpg",
      title: "GROCERIES DELIVERY",
      subtitle:
        "We know how large objectswill act, but things on a small scale just do not act that way",
      buttonText: "Start Now",
    },
    {
      image:
        "https://c4.wallpaperflare.com/wallpaper/769/308/1/water-water-drops-fruit-apples-wallpaper-preview.jpg",
      title: "GROCERIES DELIVERY",
      subtitle:
        "We know how large objectswill act, but things on a small scale just do not act that way",
      buttonText: "Start Now",
    },
    {
      image:
        "https://c4.wallpaperflare.com/wallpaper/486/777/184/mcdonald-s-food-burgers-burger-wallpaper-preview.jpg",
      title: "GROCERIES DELIVERY",
      subtitle:
        "We know how large objectswill act, but things on a small scale just do not act that way",
      buttonText: "Start Now",
    },
  ];

  const cardItems = [
    {
      image:
        "https://png.pngtree.com/element_our/png/20181129/vector-illustration-of-fresh-red-apple-with-single-leaf-png_248312.jpg",
      title1: "Your space",
      title2: "Unique Life",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/2a2d/cc86/6e19165f854d8ad6ea22db2c70a489f8?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nqxNxeLRX1N5qhV5vuq4vkN4zQbHA12qc8hnxZzdCLq7Z~WtPoXhKffNHw2bVu5deQwKYPypRvUWbTEEcb~zbg3t~WGaHtHaL5Q0bUW4gGES0aSK2QrgFwOy2unpKoX9OADNVPDOlnyJoQ8XFmWV0Z32-UbhYEGq~b0zV1o-uawl9wdBnKB1wGPmsRhWQ2cKcDzXzLJVhK9TD8ULP4NrNGOwyvpKDVNCEIpNW021rjHCiriMh4KR8OZERVsxaCoa7igHVQnlmuefG64iQNM4zAqwxLAczVXMb0dw~2b8ecTvwWNmCpY43TsSQ6nTxruEBZD4EU6XfkBhrG4-19ppEg__",
      title1: "Ends Today",
      title2: "Elements Style",
    },
    {
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D ",
      title1: "Ends Today",
      title2: "Elements Style",
    },
  ];

  const bestSellerItems = [
    {
      imageUrl:
        "https://c4.wallpaperflare.com/wallpaper/374/404/846/brown-bird-perching-during-daytime-wren-wren-wallpaper-preview.jpg",
      title: "Graphic Design",
      subTitle: "English Department",
      price1: 16.48,
      price2: 6.48,
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D",
      title: "Graphic Design",
      subTitle: "English Department",
      price1: 16.48,
      price2: 6.48,
    },
    {
      imageUrl:
        "https://c1.wallpaperflare.com/preview/656/38/328/salmon-fish-grilled-fish-grill.jpg",
      title: "Graphic Design",
      subTitle: "English Department",
      price1: 16.48,
      price2: 6.48,
    },
    {
      imageUrl:
        "https://c4.wallpaperflare.com/wallpaper/374/404/846/brown-bird-perching-during-daytime-wren-wren-wallpaper-preview.jpg",
      title: "Graphic Design",
      subTitle: "English Department",
      price1: 16.48,
      price2: 6.48,
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D",
      title: "Graphic Design",
      subTitle: "English Department",
      price1: 16.48,
      price2: 6.48,
    },
    {
      imageUrl:
        "https://c1.wallpaperflare.com/preview/656/38/328/salmon-fish-grilled-fish-grill.jpg",
      title: "Graphic Design",
      subTitle: "English Department",
      price1: 16.48,
      price2: 6.48,
    },
  ];

  const bestSellerProducts = [
    {
      imageUrl:
        "https://c1.wallpaperflare.com/preview/656/38/328/salmon-fish-grilled-fish-grill.jpg",
      title: "Graphic Design",
      subTitle: "English Department",
      price1: 16.48,
      price2: 6.48,
    },
    {
      imageUrl:
        "https://c4.wallpaperflare.com/wallpaper/374/404/846/brown-bird-perching-during-daytime-wren-wren-wallpaper-preview.jpg",
      title: "Graphic Design",
      subTitle: "English Department",
      price1: 16.48,
      price2: 6.48,
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D",
      title: "Graphic Design",
      subTitle: "English Department",
      price1: 16.48,
      price2: 6.48,
    },
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/2a2d/cc86/6e19165f854d8ad6ea22db2c70a489f8?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nqxNxeLRX1N5qhV5vuq4vkN4zQbHA12qc8hnxZzdCLq7Z~WtPoXhKffNHw2bVu5deQwKYPypRvUWbTEEcb~zbg3t~WGaHtHaL5Q0bUW4gGES0aSK2QrgFwOy2unpKoX9OADNVPDOlnyJoQ8XFmWV0Z32-UbhYEGq~b0zV1o-uawl9wdBnKB1wGPmsRhWQ2cKcDzXzLJVhK9TD8ULP4NrNGOwyvpKDVNCEIpNW021rjHCiriMh4KR8OZERVsxaCoa7igHVQnlmuefG64iQNM4zAqwxLAczVXMb0dw~2b8ecTvwWNmCpY43TsSQ6nTxruEBZD4EU6XfkBhrG4-19ppEg__",
      title: "Graphic Design",
      subTitle: "English Department",
      price1: 16.48,
      price2: 6.48,
    },
  ];
  const cardData = [
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/679b/3cdf/17b8ec542ce1c452944dfb51f10ba010?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JKaE2ykMdJRV0wOqKV5T01HpLGew5iDTUln~ZPJEZzggXv-7in319BE6kHVQMbQ5Mt-3yJiE2McUck4E0anMiGV85q~LPoAtbeKB0WK-Sph3dcguNHDykLYoH8OzeCKud3n1uprCnzWzh37SkdjXrz5mcFGIRlWtspdo81osW9FUmYI3Ox8d3HwOgbqlFOynOmSlLGlmg769cBFJYcDDhWeLH-1EPzbcWh70uFb8JyEopIGW15wSzdcWXWi70t69e2LBRVTCsqibtofB7W4beQ5xaF2419UvFlgpaZfvzQExd9TiCxkmLu-fimmtpjJqYv2l4oqy~qoHLpDxtgPKHg__",
      categories: ["Google", "Trending", "New"],
      heading: "Loudest à la Madison #1 (L,integral)",
      explanation:
        "We focus on ergonomics and meeting you where you work. Its only a keystroke away.",
      time: "22 April 2021",
      comments: 10,
    },
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/412d/5bc5/d51defa7e9522a5eb5f534d0442131b2?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OCdT5X24T2gfL3qr0EAnpnVvGjg63b6~BHdxhz-Dsr94~1ZYpc4-~GGbvnzFAVU4cwsBA1hnNdgkGtZ-TyYDSwdXe5wr9-uEOu852Bx-IFMkZ4VSBmOypHXXGYkI8YI83skF3GwNlAFyWyLzgqt1I5kB3y6AP4OynFX6BQeQqDgtwOYoT7c7EcKADafz0v~WjeaCYKzwcBgjIiQ2XmJZlBYBjNvpDP1li7DOMNcXRLCXkd-EaC5U2f-XOyfTcevm29DY9DA-bTEjbkLulwKRAvJTX-AFF9SDwhbWVmjoclF0iblNosM7Yl3fd0lWsyAe2plHoQObNgsBi4zRV65nOA__",
      categories: ["Google", "Trending", "New"],
      heading: "Loudest à la Madison #1 (L,integral)",
      explanation:
        "We focus on ergonomics and meeting you where you work. Its only a keystroke away.",
      time: "22 April 2021",
      comments: 10,
    },
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/af91/645f/60a447510f7b4e8aa158f122b0d1fe29?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GGfodYFg8m24glmMok~wmUFo0gGTDPveBL8jvak1rTqfkzg-hkDvf7P-AE97xFKiqgdYRPwN-PzgcxDKb8yW6ej2fMI81pplCK92gzx6Pe19XpP8X1so4a43c7H7LQnfiU7cGyeN4yGzQGzCuxzmtZ5CTlbWAy7ccIGvn~YxP~lsbLuafDk4tsqqD2SOxSc~z47XSKVO6trKkApBhywoww5YO2jXenrrJh8eC7mrtYe4LtoAhcRClU3fhQtAjwKUaq70LkLCYRPlAcJbrnIY1cIN-vSw5Cky93yu8h0UHBuj~5rL-xe9XC0qWAZhAVzFd3~Ih3mBvP-OL29IvBVRHw__",
      categories: ["Google", "Trending", "New"],
      heading: "Loudest à la Madison #1 (L,integral)",
      explanation:
        "We focus on ergonomics and meeting you where you work. Its only a keystroke away.",
      time: "22 April 2021",
      comments: 10,
    },
  ];

  return (
    <>
      {/* navbar  section*/}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "1%",
        }}
      >
        <Box sx={{ fontSize: "25px", fontWeight: "600" }}>Bandage</Box>
        <Box sx={{ display: "flex" }}>
          <Box sx={sx.navLinks}>Home</Box>
          <Box sx={sx.navLinks}>
            Shop <KeyboardArrowDownIcon fontSize="small" />
          </Box>
          <Box sx={sx.navLinks}>About</Box>
          <Box sx={sx.navLinks}>Blog</Box>
          <Box sx={sx.navLinks}>Contact</Box>
          <Box sx={sx.navLinks}>Pages</Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", color: "#23a6f0" }}>
          <Box sx={sx.navLinks}>
            <PersonOutlineIcon fontSize="" />
            Login&nbsp;/&nbsp;Register
          </Box>
          <Box sx={sx.navLinks}>
            {" "}
            <SearchIcon fontSize="small" />
          </Box>
          <Box sx={sx.navLinks}>
            <ShoppingCartIcon fontSize="small" />
          </Box>
          <Box sx={sx.navLinks}>
            <FavoriteBorderIcon fontSize="small" />
          </Box>
        </Box>
      </Box>

      {/* corousal section */}
      <Box>
        <CorouselItem items={carouselItems} />
      </Box>

      {/* primary cards */}
      <Box sx={{ padding: "6%", background: "#fafafa" }}>
        <Grid container spacing={4} justifyContent="space-around">
          <PrimaryCards items={cardItems} />
        </Grid>
      </Box>

      {/* group 1 */}

      <Box sx={{ margin: "5%", display: "flex" }}>
        <Box
          sx={{
            height: "100vh",
            width: "35%",
            backgroundImage: `url(${"https://media.istockphoto.com/id/172876004/photo/banana-wallpaper.jpg?s=612x612&w=0&k=20&c=DjUIq77Fh3ljde_WJNwYl17e86VxMUpOwYiVL2XJo9U="})`,
            padding: "1%",
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>FURNITURE</Typography>
          <Typography sx={{ color: "grey", fontSize: "13px" }}>
            5 Items
          </Typography>
        </Box>
        <Box sx={{ margin: "1%", width: "65%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography sx={{ fontWeight: "bold" }}>
                BESTSELLER PRODUCTS
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ ...sx.bestSeller, color: "blue" }}>Men</Box>
              <Box sx={sx.bestSeller}>Woman</Box>
              <Box sx={sx.bestSeller}>Accessories</Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box sx={sx.bestSeller}>
                <KeyboardArrowLeftIcon />
              </Box>
              <Box>
                <ChevronRightIcon />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "1px",
              background: "grey",
              margin: "2%",
            }}
          ></Box>
          <Box sx={{ margin: "4%" }}>
            <Grid container spacing={4} justifyContent="space-around">
              <BestSellerCards items={bestSellerItems} />
            </Grid>
          </Box>
        </Box>
      </Box>

      {/* Group 2 */}
      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          padding: "5%",
        }}
      >
        <Box
          sx={{
            width: "60%",
            height: "100vh",
            background: "red",
            backgroundImage: `url(${"https://img.freepik.com/premium-photo/man-riding-bike-with-pizza-delivery-bike-it_786255-13022.jpg?w=740"})`,
          }}
        ></Box>
        <Box sx={{ paddingY: "3%", background: "#fafafa" }}>
          <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
            MOST POPULAR
          </Typography>
          <Box>
            <Typography
              sx={{
                width: "50%",
                marginX: "25%",
                marginY: "5%",
                color: "grey",
              }}
            >
              We focus on ergonomics and meeting you where you work it is only a
              keystroke away
            </Typography>
          </Box>
          <img
            height={150}
            style={{ objectFit: "contain" }}
            src="https://s3-alpha-sig.figma.com/img/e43d/8ea6/b4108cbd028fc3719beccb40231bf020?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FOiGw7rb56coZ7gUKrHn2UyJvzEovBZ6R1fJah0z7ZsXOhfd-KZZuadL~2ZySDpGHrSjLGW6FH3VUAOlWVFS-TUz1RHqk4RYZX~ylTyoqfDZyaV0cJfeIofrhzJMO1-rjg3U4YN25DbFBNobGoYRSAC5~Qp~CC3VxFhLh6PFSZjIuIBUvlxra62iSRNOtSGF7WvYeZnV4Jsmbu1PEVdaaD2xmu4hFDsZAK4owGp512yKjEtOdRbo0gWT2oJvBB4f7xVKpHQl3JWjukPQc7nyxT0uIH3HKJMDtnCcfSn6I6K58gnuWLahiCF49Dpl9my3ce3K8GhY8NmmDaPsfEZAlA__"
            alt=""
          />

          <Typography sx={{ marginY: "5%", fontWeight: "bold" }}>
            English Department
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginY: "2%",
              marginX: "43%",
            }}
          >
            <Typography variant="body2" color="textSecondary">
              $16.48
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "greenyellow", fontWeight: "bold " }}
            >
              &nbsp;&nbsp;$6.48
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ margin: "5%", display:'flex', }}>
        <Box sx={{ display: "flex" , marginX:'5%' }}>
          <Box sx={{ fontSize: "30px", color: "red" }}>1.</Box>
          <Box>
            <Box sx={{fontWeight:'bold',paddingBottom:'3%'}}>Easy To Use</Box>
            <Box sx={{fontSize:'13px',color:'grey'}}>Things on a very small <br/> that you have any direct</Box>
          </Box>
        </Box>

        <Box sx={{ display: "flex", marginX:'6%' }}>
          <Box sx={{ fontSize: "30px", color: "red" }}>2.</Box>
          <Box>
            <Box sx={{fontWeight:'bold',paddingBottom:'3%'}}>Easy To Use</Box>
            <Box sx={{fontSize:'13px',color:'grey'}}>Things on a very small <br/> that you have any direct</Box>
          </Box>
        </Box>

        <Box sx={{ display: "flex", marginX:'6%' }}>
          <Box sx={{ fontSize: "30px", color: "red" }}>3.</Box>
          <Box>
            <Box sx={{fontWeight:'bold',paddingBottom:'3%'}}>Easy To Use</Box>
            <Box sx={{fontSize:'13px',color:'grey'}}>Things on a very small <br/> that you have any direct</Box>
          </Box>
        </Box>

        <Box sx={{ display: "flex", marginX:'6%' }}>
          <Box sx={{ fontSize: "30px", color: "red" }}>4.</Box>
          <Box>
            <Box sx={{fontWeight:'bold',paddingBottom:'3%'}}>Easy To Use</Box>
            <Box sx={{fontSize:'13px',color:'grey'}}>Things on a very small <br/> that you have any direct</Box>
          </Box>
        </Box>
      </Box>
      {/* Group 1 reverse */}

      <Box sx={{ marginX: "5%", display: "flex" }}>
        <Box sx={{ margin: "1%", width: "65%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography sx={{ fontWeight: "bold" }}>
                BESTSELLER PRODUCTS
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ ...sx.bestSeller, color: "blue" }}>Men</Box>
              <Box sx={sx.bestSeller}>Woman</Box>
              <Box sx={sx.bestSeller}>Accessories</Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box sx={sx.bestSeller}>
                <KeyboardArrowLeftIcon />
              </Box>
              <Box>
                <ChevronRightIcon />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "1px",
              background: "grey",
              margin: "2%",
            }}
          ></Box>
          <Box sx={{ margin: "4%" }}>
            <Grid container spacing={4} justifyContent="space-around">
              <BestSellerCards items={bestSellerItems} />
            </Grid>
          </Box>
        </Box>
        <Box
          sx={{
            height: "100vh",
            width: "35%",
            backgroundImage: `url(${"https://thumbs.dreamstime.com/b/rose-wedding-cake-14705223.jpg"})`,
            padding: "1%",
          }}
        >
          <Typography sx={{ fontWeight: "bold", color: "#fff" }}>
            FURNITURE
          </Typography>
          <Typography sx={{ color: "grey", fontSize: "13px" }}>
            5 Items
          </Typography>
        </Box>
      </Box>

      {/* Group 2 reverse */}
      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          paddingY: "3%",
          marginX: "4%",
        }}
      >
        <Box sx={{ paddingY: "3%", background: "#fafafa" }}>
          <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
            MOST POPULAR
          </Typography>
          <Box>
            <Typography
              sx={{
                width: "50%",
                marginX: "25%",
                marginY: "5%",
                color: "grey",
              }}
            >
              We focus on ergonomics and meeting you where you work it is only a
              keystroke away
            </Typography>
          </Box>
          <img
            style={{ objectFit: "contain" }}
            width="200"
            src="https://s3-alpha-sig.figma.com/img/0105/8cbc/3e7bfbdcc513d28c0436b14bb41048a6?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NRQ1mYSVO3PUpBEOINLOX-dxmtWjQQmoEhkZnaEWWQtiyZNC7WclMLv6jdCI79SCfxZWuC9e6SUbxbEu9jqWYK7b0Vx5LShsCvG96j0ZktqtuqdFUZaWLTX4BrEdzP~KQmPMMPG5bBg8Mis6qXn1K2lwwMCr4tLXGnfocLCipLBnX2iPlvRG5YhBNRoRG2jQHxYrq-~0nhNcWVPrj0atxvfVhquXEdZbOIUJkfgXT63J0pMBG0Zn7CAtF3Re12WE4vIHE20fQMH3GtVlt5upE81Lb1xppqJ~QTdHtQCuO0B2JoMz0iV5SSTJhuB0XeAS-ASRUhZclN2wPAz0YMNWIQ__"
            alt=""
          />

          <Typography sx={{ marginY: "5%", fontWeight: "bold" }}>
            English Department
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>
            <TrendingUpIcon fontSize="" /> 15 Sales{" "}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginY: "2%",
              marginX: "43%",
            }}
          >
            <Typography variant="body2" color="textSecondary">
              $16.48
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "greenyellow", fontWeight: "bold " }}
            >
              &nbsp;&nbsp;$6.48
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" padding={2}>
            <Box width={15} height={15} borderRadius="50%" bgcolor="skyblue" />
            <Box
              width={15}
              height={15}
              borderRadius="50%"
              bgcolor="green"
              marginX={2}
            />
            <Box width={15} height={15} borderRadius="50%" bgcolor="orange" />
            <Box
              width={15}
              height={15}
              marginLeft={2}
              borderRadius="50%"
              bgcolor="black"
              color="white"
              display="flex"
              alignItems="center"
              justifyContent="center"
            ></Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "60%",
            height: "100vh",
            background: "red",
            backgroundImage: `url(${"https://c0.wallpaperflare.com/preview/662/627/703/adult-bowl-brunette-eat.jpg"})`,
          }}
        ></Box>
      </Box>

      <Box sx={{ marginX: "10%" }}>
        <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
          BESTSELLER PRODUCTS
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "1px",
            background: "grey",
            margin: "2%",
          }}
        ></Box>
        <Box sx={{ margin: "4%" }}>
          <Grid container spacing={4} justifyContent="space-around">
            <BestSellerCards items={bestSellerProducts} />
          </Grid>
        </Box>
      </Box>
      <Box>
        <Box>
          <img width={"100%"} src="/reddit.svg" alt="" />
        </Box>
      </Box>
      <Box sx={{ marginX: "10%", marginY: "5%", textAlign: "center" }}>
        <Typography
          sx={{
            color: "blue",
            fontWeight: "bold",
            fontSize: "14px",
            marginY: "5%",
          }}
        >
          Practice Advice
        </Typography>
        <Typography
          sx={{ fontWeight: "bold", fontSize: "35px", marginY: "5%" }}
        >
          Featured Posts
        </Typography>
        <Box></Box>
      </Box>

      {/* last cards */}

      <Grid container>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
            <Box
              marginX={10}
              marginY={5}
              maxWidth={350}
              maxHeight={480}
              boxShadow={3}
              overflow="hidden"
            >
              <img
                src={card.imageUrl}
                alt="Placeholder"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />

              <Box
                padding={1}
                bgcolor="#f2f2f2"
                display="flex"
                justifyContent="space-evenly"
                cursor="pointer"
              >
                {card.categories.map((category, i) => (
                  <Typography key={i} variant="caption" color="primary">
                    {category}
                  </Typography>
                ))}
              </Box>

              <Box padding={1}>
                <Typography variant="h6">{card.heading}</Typography>
              </Box>

              <Box padding={1}>
                <Typography variant="body2" sx={{ color: "grey" }}>
                  {card.explanation}
                </Typography>
              </Box>

              <Box padding={1} display="flex" justifyContent="space-between">
                <Typography variant="caption" color="textSecondary">
                  <AccessTimeIcon sx={{ color: "blue" }} fontSize="" />{" "}
                  {card.time}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  <CommentIcon sx={{ color: "green" }} fontSize="" />{" "}
                  {card.comments} comments
                </Typography>
              </Box>

              <Box padding={1} textAlign="left">
                Learn More <ChevronRightIcon fontSize="" />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      {/* footer section */}
      <Box
        sx={{
          padding: "3%",
          background: " rgba(37, 43, 66, 1)",
          color: "#fff",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Box>
            <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
              Consulting Agency For Your Business
            </Typography>
            <Typography>the quick fox jumps over the lazy dog</Typography>
          </Box>
          <Box>
            <Button variant="contained">Contact Us</Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            paddingTop: "5%",
          }}
        >
          <Box>
            <Box sx={sx.footerHeading}>Company Info</Box>
            <Box>About Us</Box>
            <Box>Carrier</Box>
            <Box>We Are Hiring</Box>
            <Box>Blog</Box>
          </Box>
          <Box>
            <Box sx={sx.footerHeading}>Legal</Box>
            <Box>About Us</Box>
            <Box>Carrier</Box>
            <Box>We Are Hiring</Box>
            <Box>Blog</Box>
          </Box>
          <Box>
            <Box sx={sx.footerHeading}>Features</Box>
            <Box>Business marketing</Box>
            <Box>User Analysis</Box>
            <Box>Live Chat</Box>
            <Box>Unlimited Support</Box>
          </Box>
          <Box>
            <Box sx={sx.footerHeading}>Resourses</Box>
            <Box>IOS & Android</Box>
            <Box>Watch a Demo</Box>
            <Box>Customers</Box>
            <Box>API</Box>
          </Box>
          <Box>
            <Box sx={sx.footerHeading}>Get In Touch</Box>
            <Box>
              <CallIcon fontSize="" /> (480) 555-0103
            </Box>
            <Box>
              <LocationOnIcon fontSize="" />
              4517 Washington Ave.
            </Box>
            <Box>
              <EmailIcon fontSize="" />
              debra.holt@example.com
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            paddingTop: "5%",
          }}
        >
          <Box>
            <Typography>
              Made With Love By Finland All Right Reserved{" "}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <InstagramIcon fontSize="small" color="primary" />
            </Box>
            <Box sx={sx.iconStyle}>
              <FacebookIcon fontSize="small" color="primary" />
            </Box>
            <Box sx={sx.iconStyle}>
              <XIcon fontSize="small" color="primary" />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

const sx = {
  navLinks: {
    paddingX: "5%",
    cursor: "pointer",
    display: "flex",
  },
  bestSeller: {
    paddingX: "10%",
    cursor: "pointer",
    display: "flex",
    color: "grey",
  },
  footerHeading: {
    fontSize: "16px",
    fontWeight: "bold",
    paddingBottom: "5%",
  },
  iconStyle: {
    marginLeft: "25%",
  },
};

export default App;
