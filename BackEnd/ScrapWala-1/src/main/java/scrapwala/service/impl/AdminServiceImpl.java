package scrapwala.service.impl;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.modelmapper.ModelMapper;
import scrapwala.entities.Admin;
import scrapwala.exception.ResourceNotFoundException;
import scrapwala.repositories.AdminRepository;
import scrapwala.repositories.UserRepository;
import scrapwala.response.AdminDto;
import scrapwala.response.UserDto;
import scrapwala.service.AdminService;

@Service
@Component
public class AdminServiceImpl implements AdminService  {
	
	@Autowired
	private AdminRepository adminRepository;
	
	@Autowired
	private ModelMapper modelmapper;
	
	@Autowired
	private UserRepository userRepository;
	
//	public ModelMapper getModelmapper() {
//		return modelmapper;
//	}
	public void setModelmapper(ModelMapper modelmapper) {
		this.modelmapper = modelmapper;
	}
	public AdminServiceImpl(AdminRepository adminRepository) {
		super();
		this.adminRepository = adminRepository;
	}
	@Override
	public AdminDto saveAdmin(AdminDto adminDto) {
		
//		scrapwala.entities.User user = this.userRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("User", "id", id));
		
		Admin ad = this.dtoToAdmin(adminDto);
//		adminDto.setUserDto(this.modelmapper.map(user, UserDto.class));
		Admin saveadmin = this.adminRepository.save(ad);
		return this.modelmapper.map(saveadmin, AdminDto.class);
	}
	@Override
	public List<AdminDto> getAllAdmins() {
		
		List<Admin> admins = this.adminRepository.findAll();
		List<AdminDto> admindto = admins.stream().map(admin-> this.adminToDto(admin)).collect(Collectors.toList());
		return admindto;
	}
	@Override
	public AdminDto getAdminById(int id) {
		
		Admin admin =this.adminRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Admin", "id", id));
		return this.adminToDto(admin);
	}
	@Override
	public AdminDto updateAdmin(AdminDto admindto, int id) {
		Admin admin = this.adminRepository.findById(id).orElseThrow();
		admin.setAdminLastLogin(admindto.getAdminLastLogin());
		admin.setAdminNameFirst(admindto.getAdminNameFirst());
		admin.setAdminNameLast(admindto.getAdminNameLast());
		Admin updateAdmin = this.adminRepository.save(admin);
		AdminDto admindto1 = this.adminToDto(updateAdmin);
		return admindto1;	
	}
	@Override
	public void deleteAdmin(int id) {
		Admin admin=this.adminRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Admin", "id", id));	
		this.adminRepository.delete(admin);	
	}
	public Admin dtoToAdmin(AdminDto adminDto) {
		Admin admin = this.modelmapper.map(adminDto, Admin.class);
		return admin;
	}
	public AdminDto adminToDto(Admin admin) {
		AdminDto adminDto =this.modelmapper.map(admin, AdminDto.class);
		return adminDto;
		
	}

}
